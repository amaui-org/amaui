import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBabyChangingStationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BabyChangingStationW100'

      short_name='BabyChangingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 21.35q-.325 0-.537-.212-.213-.213-.213-.538V13q0-.125.013-.238.012-.112.062-.237l1.475-4.3q.2-.575.738-.813.537-.237 1.087.013l4.3 1.875H13q.15 0 .25.1t.1.25q0 .15-.1.25T13 10h-1.55q-.15 0-.3-.038-.15-.037-.3-.087L7.9 8.6l-1.55 4.7v7.3q0 .325-.212.538-.213.212-.538.212ZM7.75 5.5q-.65 0-1.125-.475T6.15 3.9q0-.65.475-1.125T7.75 2.3q.65 0 1.125.475T9.35 3.9q0 .65-.475 1.125T7.75 5.5ZM10 16.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8.45-1.7q-.45 0-.775-.325t-.325-.775q0-.45.325-.775t.775-.325q.45 0 .775.325t.325.775q0 .45-.325.775t-.775.325Zm-5.3 0q-.625 0-1.062-.438-.438-.437-.438-1.062v-1.5H10q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T10 11h1.6q.325 0 .538.212.212.213.212.538V13h3.3v-1.65q0-.15.1-.25T16 11q.15 0 .25.1t.1.25v1.85q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialBabyChangingStationW100.displayName = 'AmauiIconMaterialBabyChangingStationW100';

export default IconMaterialBabyChangingStationW100;
