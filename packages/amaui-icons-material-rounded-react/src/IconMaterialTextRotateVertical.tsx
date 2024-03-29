import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVertical'

      short_name='TextRotateVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 12.6h3.3l-1.6-4.55h-.1ZM6 18.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.1-2.1q-.275-.275-.275-.7 0-.425.3-.725.275-.275.675-.275t.7.275l.4.375V6q0-.425.287-.713Q5.575 5 6 5t.713.287Q7 5.575 7 6v9.15l.4-.375q.3-.275.7-.275.4 0 .7.3.275.275.275.7 0 .425-.275.7l-2.1 2.1q-.15.15-.325.212-.175.063-.375.063ZM12.2 17q-.55 0-.8-.363-.25-.362-.05-.862l3.3-8.85q.15-.375.538-.65Q15.575 6 16 6q.425 0 .812.275.388.275.538.65l3.3 8.85q.2.5-.062.862-.263.363-.813.363-.25 0-.475-.163-.225-.162-.3-.387l-.75-2.25H13.8l-.8 2.25q-.075.225-.3.387-.225.163-.5.163Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVertical.displayName = 'AmauiIconMaterialTextRotateVertical';

export default IconMaterialTextRotateVertical;
