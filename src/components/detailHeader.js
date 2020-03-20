import React from "react";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

const detailHeader = props => (
  <div>
    <h2>Componente Detalle</h2>
    <SettingsBackupRestoreIcon
      onClick={() => {
        props.goBack();
      }}
    />
  </div>
);

export default detailHeader;
