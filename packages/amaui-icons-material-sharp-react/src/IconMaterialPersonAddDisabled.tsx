import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabled'

      short_name='PersonAddDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 17 19.8v.2H1v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13q.325 0 .638.012.312.013.612.038L9.2 12H9q-1.65 0-2.825-1.175Q5 9.65 5 8v-.2L1.4 4.2l1.425-1.425 18.4 18.4ZM18 14v-3h-3V9h3V6h2v3h3v2h-3v3Zm-5.4-4.3L11 8.1V8q0-.825-.587-1.412Q9.825 6 9 6h-.1L7.3 4.4q.375-.2.813-.3Q8.55 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 .45-.1.887-.1.438-.3.813ZM3 18h12v-.2l-2.15-2.15q-.95-.325-1.925-.488Q9.95 15 9 15q-1.4 0-2.775.337-1.375.338-2.725 1.013-.225.125-.362.35-.138.225-.138.5Zm8-9.9ZM9 15Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabled.displayName = 'AmauiIconMaterialPersonAddDisabled';

export default IconMaterialPersonAddDisabled;
