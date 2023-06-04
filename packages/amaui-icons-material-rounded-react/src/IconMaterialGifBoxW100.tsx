import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGifBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxW100'

      short_name='GifBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 13.85h1q.35 0 .6-.25t.25-.6v-.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v.5q0 .05-.05.1t-.1.05h-1q-.05 0-.1-.05t-.05-.1v-2q0-.05.037-.1.038-.05.088-.05h1.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8.5q-.35 0-.6.25t-.25.6v2q0 .35.25.6t.6.25Zm3.5 0q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1Zm2 0q.15 0 .25-.1t.1-.25v-1.15h1.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.15v-.8H16q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.95q-.175 0-.288.112-.112.113-.112.288v2.95q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialGifBoxW100.displayName = 'AmauiIconMaterialGifBoxW100';

export default IconMaterialGifBoxW100;
