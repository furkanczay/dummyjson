"use client"
import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn, Avatar, Chip} from "@nextui-org/react";

type Props = {}

const LanguageSwitcher = (props: Props) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["tr"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <div>
      <Dropdown>
      <DropdownTrigger className='cursor-pointer'>

          <Avatar src={selectedKeys.has("tr") ? "/flags/tr.svg" : "/flags/en.svg"} alt={selectedKeys.has("tr") ? "tr-flag" : "en-flag"} />

      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" selectionMode="single" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} disabledKeys={["en"]}>
        <DropdownItem
          key="tr"
          startContent={<Avatar src="/flags/tr.svg" alt="tr-flag" />}
          value="tr"
        >
          Türkçe
        </DropdownItem>
        <DropdownItem
          key="en"
          startContent={<Avatar src="/flags/en.svg" alt="en-flag" />}
          value="tr"
        >
          English <Chip>Soon</Chip>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}

export default LanguageSwitcher