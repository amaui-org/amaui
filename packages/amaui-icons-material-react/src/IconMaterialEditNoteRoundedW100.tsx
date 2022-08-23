import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditNoteRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteRoundedW100'
      short_name='EditNote'

      {...props}
    >
      <path d="M19.675 14.55 18.45 13.325 19.175 12.6Q19.3 12.475 19.425 12.475Q19.55 12.475 19.675 12.6L20.4 13.325Q20.525 13.45 20.525 13.575Q20.525 13.7 20.4 13.825ZM12.65 20.35V19.125L17.75 14.025L18.975 15.25L13.875 20.35ZM3.65 15.35V14.65H10.65V15.35ZM3.65 11.35V10.65H14.65V11.35ZM3.65 7.35V6.65H14.65V7.35Z"/>
    </Icon>
  );
});

IconMaterialEditNoteRoundedW100.displayName = 'AmauiIconMaterialEditNoteRoundedW100';

export default IconMaterialEditNoteRoundedW100;
