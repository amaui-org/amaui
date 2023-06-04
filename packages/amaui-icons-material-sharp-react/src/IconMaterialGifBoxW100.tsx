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
      <path d="M7.65 13.85h2.7v-1.7h-.7v1h-1.3v-2.3h1.975v-.7H7.65Zm4 0h.7v-3.7h-.7Zm2 0h.7v-1.5h1.5v-.7h-1.5v-.8h2v-.7h-2.7ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialGifBoxW100.displayName = 'AmauiIconMaterialGifBoxW100';

export default IconMaterialGifBoxW100;
