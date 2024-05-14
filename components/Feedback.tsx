"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea} from "@nextui-org/react";
import { FaMessage, FaEye, FaPerson } from "react-icons/fa6";
import { FaReadme } from "react-icons/fa";
import { sendFeedback } from "@/actions";
export default function Feedback() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Link className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group" href="#" onPress={onOpen}>
        <FaReadme />
        <span className="ml-3">Geri Bildirim</span>
      </Link>
      <Modal
        backdrop="blur"
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <form action={sendFeedback}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Geri Bildirim Gönder</ModalHeader>
              <ModalBody>
              <Input
                  autoFocus
                  endContent={
                    <FaPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  name="fullname"
                  label="İsim Soyisim"
                  placeholder="İsim Soyisim"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <FaMessage className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  name="email"
                  label="E-posta Adresi"
                  placeholder="E-posta adresinizi girin"
                  description="Size bilgi verebilmek adına e-posta adresinizi girmeniz gerekmektedir."
                  variant="bordered"
                />
                <Textarea
                  endContent={
                    <FaEye className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  name="comments"
                  label="Görüşünüz"
                  placeholder="Görüşünüzü belirtin"
                  type="text"
                  variant="bordered"
                  description="Görüşleriniz bizim için önemlidir, Dummy Data için endpoint talebinden tasarım hakkındaki görüşlerinize kadar her şeyi yazabilirsiniz."
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Vazgeç
                </Button>
                <Button onPress={onClose} type="submit" color="primary">
                  Gönder
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </form>
      </Modal>
    </>
  );
}
