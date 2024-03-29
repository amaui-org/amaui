import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationNone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNone'

      short_name='TextRotationNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.85 20.75q-.3-.3-.3-.712 0-.413.3-.713L17.2 19H4.975q-.425 0-.7-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h12.2l-.375-.35q-.275-.275-.263-.7.013-.425.288-.7.275-.275.7-.275.425 0 .7.275l2.025 2.05q.15.15.225.337.075.188.075.388t-.062.388q-.063.187-.213.337l-2.025 2.025q-.3.3-.713.287-.412-.012-.712-.312ZM8.175 14q-.55 0-.787-.363-.238-.362-.038-.862l3.3-8.85q.15-.375.538-.65Q11.575 3 12 3q.425 0 .8.275.375.275.525.65l3.3 8.85q.2.5-.05.862-.25.363-.8.363-.25 0-.475-.163-.225-.162-.3-.387l-.75-2.25H9.8l-.825 2.25q-.075.225-.3.387-.225.163-.5.163Zm2.175-4.4h3.3l-1.6-4.55h-.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNone.displayName = 'AmauiIconMaterialTextRotationNone';

export default IconMaterialTextRotationNone;
