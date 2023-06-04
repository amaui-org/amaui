import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial18UpRatingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingW100'

      short_name='18UpRating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5ZM5 5v14Zm3.9 9.6h.7V9.4H7.4v.7h1.5Zm3 0h3.7V9.4h-3.7Zm.7-2.95V10.1h2.3v1.55Zm0 2.25v-1.55h2.3v1.55Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingW100.displayName = 'AmauiIconMaterial18UpRatingW100';

export default IconMaterial18UpRatingW100;
