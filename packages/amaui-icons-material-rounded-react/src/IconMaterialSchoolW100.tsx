import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchoolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.8q-.2 0-.375-.05t-.35-.15l-4.2-2.275q-.35-.2-.562-.55Q6.3 14.425 6.3 14v-3.6l-1.375-.75q-.2-.1-.287-.275Q4.55 9.2 4.525 9q0-.2.1-.375t.3-.275l6.35-3.45q.175-.1.35-.15.175-.05.375-.05t.375.05q.175.05.35.15L19.9 8.775q.2.125.3.3.1.175.1.375v5.1q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V9.4l-1.9 1V14q0 .425-.212.775-.213.35-.563.55l-4.2 2.275q-.175.1-.35.15-.175.05-.375.05Zm-.3-5.25q.175.1.312.1.138 0 .313-.1l6.5-3.55-6.5-3.525q-.175-.1-.313-.1-.137 0-.312.1L5.175 9Zm-.025 4.475q.175.1.325.1.15 0 .325-.1l4.3-2.325q.2-.125.288-.288Q17 14.25 17 14v-3.2l-4.275 2.325q-.175.1-.35.137-.175.038-.375.038t-.375-.038q-.175-.037-.35-.137L7 10.8V14q0 .2.088.387.087.188.287.313Zm.325-4.35Zm0 1.275Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100.displayName = 'AmauiIconMaterialSchoolW100';

export default IconMaterialSchoolW100;
