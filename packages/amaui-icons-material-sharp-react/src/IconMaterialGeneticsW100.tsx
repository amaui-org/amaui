import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneticsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneticsW100'

      short_name='Genetics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.85v-.35q0-3.5 1.4-5.375T11.475 12q-2.4-2.25-3.8-4.125T6.275 2.5v-.35h.7v.35q0 .575.038 1.1.037.525.137 1h9.675q.1-.475.137-1Q17 3.075 17 2.5v-.35h.7v.35q0 3.5-1.4 5.375T12.525 12q2.375 2.225 3.775 4.113Q17.7 18 17.7 21.5v.35H17v-.35q0-.575-.038-1.1-.037-.525-.137-1h-9.65q-.1.475-.138 1Q7 20.925 7 21.5v.35ZM8.825 8.3h6.325q.5-.65.9-1.388.4-.737.625-1.612H7.3q.25.875.625 1.6.375.725.9 1.4ZM12 11.525q.725-.675 1.363-1.3Q14 9.6 14.55 9H9.425q.55.6 1.2 1.225.65.625 1.375 1.3ZM9.45 15h5.1q-.55-.6-1.187-1.225-.638-.625-1.363-1.3-.725.675-1.363 1.3Q10 14.4 9.45 15Zm-2.125 3.7h9.35q-.25-.875-.625-1.6-.375-.725-.9-1.4h-6.3q-.525.675-.912 1.4-.388.725-.613 1.6Z"/>
    </Icon>
  );
});

IconMaterialGeneticsW100.displayName = 'AmauiIconMaterialGeneticsW100';

export default IconMaterialGeneticsW100;
