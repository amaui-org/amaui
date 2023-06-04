import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestQuoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteFilled'

      short_name='RequestQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm7-3h2v-1h2v-5h-4v-1h4v-2h-2V9h-2v1H9v5h4v1H9v2h2Zm2.175-11h4l-4-4Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteFilled.displayName = 'AmauiIconMaterialRequestQuoteFilled';

export default IconMaterialRequestQuoteFilled;
