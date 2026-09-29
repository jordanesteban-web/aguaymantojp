import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/products";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo."),
  empresa: z.string().optional(),
  email: z.string().email("Ingresa un correo electrónico válido."),
  telefono: z.string().min(6, "Ingresa un teléfono de contacto."),
  ciudad: z.string().min(2, "Ingresa tu ciudad."),
  tipoCliente: z.string().min(1, "Selecciona el tipo de cliente."),
  producto: z.string().min(1, "Selecciona un producto de interés."),
  cantidad: z.string().optional(),
  asunto: z.string().min(3, "Indica el asunto de tu consulta."),
  mensaje: z.string().min(10, "Cuéntanos brevemente qué necesitas."),
});

type FormValues = z.infer<typeof schema>;

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

export function ContactForm({
  defaultProducto,
  defaultAsunto,
}: {
  defaultProducto?: string | undefined;
  defaultAsunto?: string | undefined;
}) {

  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      producto: defaultProducto ?? "",
      asunto: defaultAsunto ?? "",
      tipoCliente: "",
    },
  });

  // Listo para conectarse luego a un servicio de email, CRM o backend.
  const onSubmit = async (values: FormValues) => {
    console.info("Consulta de contacto", values);
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-xl border border-leaf/30 bg-secondary p-8 text-center shadow-[var(--shadow-soft)]"
      >
        <CheckCircle2 className="mx-auto size-10 text-leaf" aria-hidden="true" />
        <h3 className="mt-4 text-xl text-brand">Consulta enviada</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const fieldClass = "mt-1.5 bg-card";
  const errorClass = "mt-1 text-xs text-destructive";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-border bg-card/60 p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" autoComplete="name" className={fieldClass} {...register("nombre")} />
          {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
        </div>

        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            id="empresa"
            autoComplete="organization"
            className={fieldClass}
            {...register("empresa")}
          />
        </div>

        <div>
          <Label htmlFor="ciudad">Ciudad *</Label>
          <Input
            id="ciudad"
            autoComplete="address-level2"
            className={fieldClass}
            {...register("ciudad")}
          />
          {errors.ciudad && <p className={errorClass}>{errors.ciudad.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" type="tel" autoComplete="tel" className={fieldClass} {...register("telefono")} />
          {errors.telefono && <p className={errorClass}>{errors.telefono.message}</p>}
        </div>

        <div>
          <Label htmlFor="tipoCliente">Tipo de cliente *</Label>
          <select
            id="tipoCliente"
            className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            {...register("tipoCliente")}
          >
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
          {errors.tipoCliente && <p className={errorClass}>{errors.tipoCliente.message}</p>}
        </div>

        <div>
          <Label htmlFor="producto">Producto de interés *</Label>
          <select
            id="producto"
            className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            {...register("producto")}
          >
            <option value="">Selecciona una opción</option>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name}
              </option>
            ))}
            <option value="otro">Otro / por definir</option>
          </select>
          {errors.producto && <p className={errorClass}>{errors.producto.message}</p>}
        </div>

        <div>
          <Label htmlFor="cantidad">Cantidad aproximada</Label>
          <Input
            id="cantidad"
            placeholder="Ej. 50 kg por semana"
            className={fieldClass}
            {...register("cantidad")}
          />
        </div>

        <div>
          <Label htmlFor="asunto">Asunto *</Label>
          <Input id="asunto" className={fieldClass} {...register("asunto")} />
          {errors.asunto && <p className={errorClass}>{errors.asunto.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="mensaje">Mensaje *</Label>
          <Textarea id="mensaje" rows={5} className={fieldClass} {...register("mensaje")} />
          {errors.mensaje && <p className={errorClass}>{errors.mensaje.message}</p>}
        </div>
      </div>

      <Button type="submit" variant="cta" size="lg" className="mt-7 w-full sm:w-auto" disabled={isSubmitting}>
        Enviar consulta
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  );
}
