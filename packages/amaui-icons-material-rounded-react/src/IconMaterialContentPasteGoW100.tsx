import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteGoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteGoW100'

      short_name='ContentPasteGo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.775q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H18.2q.625 0 1.063.437.437.438.437 1.063v6.125H19V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-2.5v.5q0 .625-.437 1.062Q14.825 7 14.2 7H9.8q-.625 0-1.062-.438Q8.3 6.125 8.3 5.5V5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h4.85v.7Zm11.95.125q-.125-.125-.125-.25t.125-.25l1.975-1.975H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.725l-1.975-1.975q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.3 2.3q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.3 2.3q-.1.1-.237.1-.138 0-.263-.1ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialContentPasteGoW100.displayName = 'AmauiIconMaterialContentPasteGoW100';

export default IconMaterialContentPasteGoW100;
