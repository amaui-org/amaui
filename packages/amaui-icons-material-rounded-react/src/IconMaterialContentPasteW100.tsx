import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteW100'

      short_name='ContentPaste'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212ZM5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.775q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H18.2q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-2.5v.5q0 .625-.437 1.062Q14.825 7 14.2 7H9.8q-.625 0-1.062-.438Q8.3 6.125 8.3 5.5V5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialContentPasteW100.displayName = 'AmauiIconMaterialContentPasteW100';

export default IconMaterialContentPasteW100;
