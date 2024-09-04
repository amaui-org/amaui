import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachFileOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileOffW100'

      short_name='AttachFileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-132q-87 0-147-61t-60-148v-305L92-828l20-20 736 736-20 20-161-161q-24 54-73.5 87.5T481-132ZM302-618v277q0 75 52 128t127 53q57 0 101-31.5t64-82.5l-88-88q0 32-22.5 57T481-280q-32 0-55.5-23T402-359v-159L302-618Zm128 128v131q0 21 14.5 36t35.5 15q21 0 35.5-15t14.5-36v-31L430-490Zm228 77v-267h28v296l-28-29ZM530-543v-142q0-48-33-81.5T416-800q-29 0-52.5 13T324-752l-20-20q20-26 48.5-41t63.5-15q60 0 101 42t41 102v170l-28-29ZM430-680v36l-28-29v-7h28Z"/>
    </Icon>
  );
});

IconMaterialAttachFileOffW100.displayName = 'AmauiIconMaterialAttachFileOffW100';

export default IconMaterialAttachFileOffW100;
