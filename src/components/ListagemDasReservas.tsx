import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

export function ListagemDasReservas() {
    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="flex flex-col text-left ">
                            <p>Jasiel Viana Leal</p>
                            <p className="text-xs">120.695.144-39</p>
                        </div>

                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-10">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">CheckIn:</p>
                                <p>15/05/2024</p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">CheckOut:</p>
                                <p>16/05/2024</p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">Quarto:</p>
                                <p>1</p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">Origem:</p>
                                <p>WhatsApp</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">Pagamento:</p>
                                <p>
                                    <Badge variant="default" className="bg-red-500">Pendente</Badge>
                                </p>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">Criado por:</p>
                                <p>
                                    Adjair Viana
                                </p>
                            </div>
                            <Button className="w-full mt-5">Finalizar</Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}