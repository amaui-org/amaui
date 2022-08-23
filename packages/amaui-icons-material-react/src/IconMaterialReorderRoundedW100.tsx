import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReorderRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderRoundedW100'
      short_name='Reorder'

      {...props}
    >
      <path d="M4 14.35Q3.85 14.35 3.75 14.25Q3.65 14.15 3.65 14Q3.65 13.85 3.75 13.75Q3.85 13.65 4 13.65H20Q20.15 13.65 20.25 13.75Q20.35 13.85 20.35 14Q20.35 14.15 20.25 14.25Q20.15 14.35 20 14.35ZM4 18.35Q3.85 18.35 3.75 18.25Q3.65 18.15 3.65 18Q3.65 17.85 3.75 17.75Q3.85 17.65 4 17.65H20Q20.15 17.65 20.25 17.75Q20.35 17.85 20.35 18Q20.35 18.15 20.25 18.25Q20.15 18.35 20 18.35ZM4 10.35Q3.85 10.35 3.75 10.25Q3.65 10.15 3.65 10Q3.65 9.85 3.75 9.75Q3.85 9.65 4 9.65H20Q20.15 9.65 20.25 9.75Q20.35 9.85 20.35 10Q20.35 10.15 20.25 10.25Q20.15 10.35 20 10.35ZM4 6.35Q3.85 6.35 3.75 6.25Q3.65 6.15 3.65 6Q3.65 5.85 3.75 5.75Q3.85 5.65 4 5.65H20Q20.15 5.65 20.25 5.75Q20.35 5.85 20.35 6Q20.35 6.15 20.25 6.25Q20.15 6.35 20 6.35Z"/>
    </Icon>
  );
});

IconMaterialReorderRoundedW100.displayName = 'AmauiIconMaterialReorderRoundedW100';

export default IconMaterialReorderRoundedW100;
