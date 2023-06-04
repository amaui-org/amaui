import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurroundSoundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSoundW100'

      short_name='SurroundSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.1q.875 0 1.488-.612.612-.613.612-1.488t-.612-1.488Q12.875 9.9 12 9.9t-1.488.612Q9.9 11.125 9.9 12t.612 1.488q.613.612 1.488.612Zm4.9 1.9q.65-.8 1.025-1.812.375-1.013.375-2.188 0-1.175-.375-2.188Q17.55 8.8 16.9 8l-.5.5q.575.725.888 1.625.312.9.312 1.875t-.312 1.875q-.313.9-.888 1.625Zm-9.8 0 .5-.5q-.575-.725-.887-1.625Q6.4 12.975 6.4 12t.313-1.875q.312-.9.887-1.625L7.1 8q-.65.8-1.025 1.812Q5.7 10.825 5.7 12q0 1.175.375 2.188Q6.45 15.2 7.1 16Zm-3.8 2.7V5.3h17.4v13.4ZM4 18V6Zm0 0h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialSurroundSoundW100.displayName = 'AmauiIconMaterialSurroundSoundW100';

export default IconMaterialSurroundSoundW100;
