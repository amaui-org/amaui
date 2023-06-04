import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial18UpRatingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingW100Filled'

      short_name='18UpRating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm4.6-5.1h.7V9.4H7.4v.7h1.5Zm3 0h3.7V9.4h-3.7Zm.7-2.95V10.1h2.3v1.55Zm0 2.25v-1.55h2.3v1.55Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingW100Filled.displayName = 'AmauiIconMaterial18UpRatingW100Filled';

export default IconMaterial18UpRatingW100Filled;
