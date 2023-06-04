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
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm3.45-5.1q.15 0 .25-.1t.1-.25V10.1q0-.275-.212-.488Q9.175 9.4 8.9 9.4H7.725q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1H8.9v4.175q0 .125.1.225t.25.1Zm3.35 0h2.3q.3 0 .5-.2t.2-.5v-3.8q0-.3-.2-.5t-.5-.2h-2.3q-.3 0-.5.2t-.2.5v3.8q0 .3.2.5t.5.2Zm0-2.95V10.1h2.3v1.55Zm0 2.25v-1.55h2.3v1.55Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingW100Filled.displayName = 'AmauiIconMaterial18UpRatingW100Filled';

export default IconMaterial18UpRatingW100Filled;
