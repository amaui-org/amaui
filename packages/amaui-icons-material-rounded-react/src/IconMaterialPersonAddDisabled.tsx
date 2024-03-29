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
      <path d="M19.1 21.875 16.8 19.6q-.15.2-.35.3-.2.1-.45.1H2q-.425 0-.712-.288Q1 19.425 1 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13q.325 0 .638.012.312.013.612.038L9.2 12H9q-1.65 0-2.825-1.175Q5 9.65 5 8v-.2L2.1 4.9q-.3-.3-.288-.7.013-.4.313-.7.3-.3.713-.3.412 0 .712.3l16.975 16.975q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3ZM19 14q-.425 0-.712-.288Q18 13.425 18 13v-2h-2q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9h2V7q0-.425.288-.713Q18.575 6 19 6t.712.287Q20 6.575 20 7v2h2q.425 0 .712.287Q23 9.575 23 10t-.288.712Q22.425 11 22 11h-2v2q0 .425-.288.712Q19.425 14 19 14Zm-6.4-4.3L11 8.1V8q0-.825-.587-1.412Q9.825 6 9 6h-.1L7.3 4.4q.375-.2.813-.3Q8.55 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 .45-.1.887-.1.438-.3.813ZM3 18h12v-.2l-2.15-2.15q-.95-.325-1.925-.488Q9.95 15 9 15q-1.4 0-2.775.337-1.375.338-2.725 1.013-.225.125-.362.35-.138.225-.138.5Zm8-9.9ZM9 15Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabled.displayName = 'AmauiIconMaterialPersonAddDisabled';

export default IconMaterialPersonAddDisabled;
