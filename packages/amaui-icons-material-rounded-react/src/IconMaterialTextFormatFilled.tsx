import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFormatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatFilled'

      short_name='TextFormat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.425 0-.713-.288Q5 18.425 5 18t.287-.712Q5.575 17 6 17h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 19 18 19Zm4.35-8.4h3.3l-1.6-4.55h-.1ZM8.175 15q-.55 0-.787-.363-.238-.362-.038-.862l3.3-8.85q.15-.375.538-.65Q11.575 4 12 4q.425 0 .8.275.375.275.525.65l3.3 8.85q.2.5-.05.862-.25.363-.8.363-.25 0-.475-.163-.225-.162-.3-.387l-.75-2.25H9.8l-.825 2.25q-.075.225-.3.387-.225.163-.5.163Z"/>
    </Icon>
  );
});

IconMaterialTextFormatFilled.displayName = 'AmauiIconMaterialTextFormatFilled';

export default IconMaterialTextFormatFilled;
