import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledFilled'

      short_name='PersonAddDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 17 19.8v.2H1v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13q.325 0 .638.012.312.013.612.038L9.2 12H9q-1.65 0-2.825-1.175Q5 9.65 5 8v-.2L1.4 4.2l1.425-1.425 18.4 18.4ZM18 14v-3h-3V9h3V6h2v3h3v2h-3v3Zm-5.4-4.3L7.3 4.4q.375-.2.813-.3Q8.55 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 .45-.1.887-.1.438-.3.813Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledFilled.displayName = 'AmauiIconMaterialPersonAddDisabledFilled';

export default IconMaterialPersonAddDisabledFilled;
