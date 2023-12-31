import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactsProductW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsProductW100'

      short_name='ContactsProduct'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M244-160q-13.357 0-23.179-10.5Q211-181 211-194v-84.119q0-72.103 44.8-127.381Q300.6-460.778 371-476q-32.381 22.796-50.19 57.398Q303-384 303-345.088v150.882q0 8.735 3 17.471Q309-168 314-160h-70Zm117.553 0q-13.581 0-23.567-10.119T328-194v-151q0-57 39-96t96-39h151.784Q671-480 710-441q39 39 39 96v50q0 57-39 96t-96 39H361.553ZM480-548q-52.633 0-89.316-36.684Q354-621.367 354-674t36.684-89.316Q427.367-800 480-800t89.316 36.684Q606-726.633 606-674t-36.684 89.316Q532.633-548 480-548Z"/>
    </Icon>
  );
});

IconMaterialContactsProductW100.displayName = 'AmauiIconMaterialContactsProductW100';

export default IconMaterialContactsProductW100;
