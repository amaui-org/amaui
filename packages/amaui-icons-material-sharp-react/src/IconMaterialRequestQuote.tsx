import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestQuote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuote'

      short_name='RequestQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14ZM6 8V4v16V8Zm5 11v-1H9v-2h4v-1H9v-5h2V9h2v1h2v2h-4v1h4v5h-2v1Zm2-11V4H6v16h12V8Z"/>
    </Icon>
  );
});

IconMaterialRequestQuote.displayName = 'AmauiIconMaterialRequestQuote';

export default IconMaterialRequestQuote;
