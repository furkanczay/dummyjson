"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, CardHeader} from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import AnnouncementsData from "@/data/announcements.json";

export default function Announcements() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const lastAnnouncement = AnnouncementsData[AnnouncementsData.length - 1]
  const lastFiveAnnouncements = AnnouncementsData.slice(-5).reverse();

  return (
    <>
      <Button onPress={onOpen} className="hidden md:inline-flex gap-3 justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
          {lastAnnouncement.color === "info" ? (
            <span className={`text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3`}>
              {lastAnnouncement.category}
            </span> 
          ) : lastAnnouncement.color === "success" ? (
            <span className={`text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3`}>
              {lastAnnouncement.category}
            </span> 
          ): lastAnnouncement.color === "fix" ? (
            <span className={`text-xs bg-orange-600 rounded-full text-white px-4 py-1.5 mr-3`}>
              {lastAnnouncement.category}
            </span> 
          ): (
            <span className={`text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3`}>
              {lastAnnouncement.category}
            </span> 
          )}
          <span className="text-sm font-medium">
            {lastAnnouncement.title}
          </span> 
          <FaChevronRight />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Duyurular (SON 5)</ModalHeader>
              <ModalBody className="py-10">
                {lastFiveAnnouncements.map((announcement, index) => (
                  <Card key={index} className="bg-gray-700/50">
                    <CardHeader>
                      {announcement.color === "info" ? (
                        <span className={`text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3`}>
                          {announcement.category}
                        </span> 
                      ) : announcement.color === "success" ? (
                        <span className={`text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3`}>
                          {announcement.category}
                        </span> 
                      ): announcement.color === "fix" ? (
                        <span className={`text-xs bg-orange-600 rounded-full text-white px-4 py-1.5 mr-3`}>
                          {announcement.category}
                        </span> 
                      ): (
                        <span className={`text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3`}>
                          {announcement.category}
                        </span> 
                      )} 
                      <span className="text-sm font-medium">
                        {announcement.title}
                      </span>
                    </CardHeader>
                    <CardBody>
                      <p>{announcement.content}</p>
                    </CardBody>
                  </Card>
                ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
