import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipW100'

      short_name='Flip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h3.5q.15 0 .25.1t.1.25q0 .15-.1.25T9.3 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h3.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 23q-.15 0-.25-.1t-.1-.25V1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v20.8q0 .15-.1.25T12 23Zm7-18h-.525v-.7H19q.3 0 .5.2t.2.5v.525H19Zm0 7.825v-1.65h.7v1.65Zm0 6.875h-.525V19H19v-.525h.7V19q0 .3-.2.5t-.5.2Zm0-10.525v-1.65h.7v1.65Zm0 7.3v-1.65h.7v1.65ZM14.35 19.7V19h2.125v.7Zm0-14.7v-.7h2.125V5Z"/>
    </Icon>
  );
});

IconMaterialFlipW100.displayName = 'AmauiIconMaterialFlipW100';

export default IconMaterialFlipW100;
