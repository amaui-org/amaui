import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalMask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMask'

      short_name='MedicalMask'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 858q-81 0-160.5-7T160 831V731q-53-14-86.5-57T40 576q0-54 33.5-97t86.5-57V287q80 13 159.5 20t160.5 7q81 0 160.5-7T800 287v135q53 14 86.5 56.5T920 576q0 55-33.5 97.5T800 730v101q-80 13-159.5 20T480 858Zm0-82q60 0 120-5t120-12V377q-60 7-120 12t-120 5q-60 0-120-5t-120-12v382q60 7 120 12t120 5Zm0-60q48 0 95-7t95-19v-83q-48 13-95 21t-95 8q-48 0-94.5-8T291 607v83q48 12 94.5 19t94.5 7Zm-320-71V508q-19 11-29.5 29T120 576q0 22 10.5 40t29.5 29Zm640 0q19-11 29.5-29t10.5-40q0-21-11-39t-29-29v137Zm-320-89q48 0 95-7t95-19v-83q-48 13-95 21t-95 8q-48 0-94.5-8T291 447v83q48 12 94.5 19t94.5 7ZM240 759V377v382Z"/>
    </Icon>
  );
});

IconMaterialMedicalMask.displayName = 'AmauiIconMaterialMedicalMask';

export default IconMaterialMedicalMask;
