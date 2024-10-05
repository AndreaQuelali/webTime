import React from "react";
import { Button } from "../../../components/buttons/button";
import CancelIcon from "../../../icons/cancel";
import ContinueIcon from "../../../icons/continue";

export default function FooterButtons() {
  return (
    <footer className="flex w-full justify-end gap-4 mx-auto p-10">
      <Button text="Cancelar" variant="combCol2" SvgIcon={CancelIcon} />
      <Button text="Continuar" variant="combCol1" SvgIcon={ContinueIcon} />
    </footer>
  );
}
