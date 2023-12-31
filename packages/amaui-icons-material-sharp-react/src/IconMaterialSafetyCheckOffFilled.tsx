import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckOffFilled'

      short_name='SafetyCheckOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m792-56 56-56-736-736-56 56 104 104v172q0 152 90.5 276.5T480-80q51-14 97.5-40.5T662-186L792-56ZM480-280q-83 0-141.5-58.5T280-480q0-20 3.5-38.5T294-554l260 260q-17 7-35.5 10.5T480-280Zm274-38q23-47 34.5-97T800-516v-244L480-880l-208 78 135 136q17-7 35-10.5t38-3.5q83 0 141.5 58.5T680-480q0 20-3.5 38.5T666-406l88 88Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOffFilled.displayName = 'AmauiIconMaterialSafetyCheckOffFilled';

export default IconMaterialSafetyCheckOffFilled;
