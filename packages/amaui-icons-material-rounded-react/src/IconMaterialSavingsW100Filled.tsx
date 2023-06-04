import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSavingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsW100Filled'

      short_name='Savings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 10.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q16.275 9.3 16 9.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213ZM8.35 8.35h4.3q.15 0 .25-.1T13 8q0-.15-.1-.25t-.25-.1h-4.3q-.15 0-.25.1T8 8q0 .15.1.25t.25.1ZM6.65 19.7q-.5 0-.925-.325-.425-.325-.55-.8-.625-2.25-.987-3.688-.363-1.437-.563-2.4-.2-.962-.262-1.625Q3.3 10.2 3.3 9.5q0-1.75 1.225-2.975T7.5 5.3h5.65q.675-.9 1.55-1.45.875-.55 1.8-.55.075 0 .137.062.063.063.063.138 0 .025-.012.037-.013.013-.013.063-.125.325-.25.775t-.275 1.3L19.275 8.8h.675q.325 0 .538.212.212.213.212.538v3.425q0 .25-.138.45-.137.2-.387.275l-2.05.675-1.275 4.25q-.15.5-.55.788-.4.287-.9.287h-.6q-.625 0-1.062-.438-.438-.437-.438-1.062v-.5H8.7v.5q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialSavingsW100Filled.displayName = 'AmauiIconMaterialSavingsW100Filled';

export default IconMaterialSavingsW100Filled;
