import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsFilled'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6.975L12 1l10 5.975V21Zm10-8.35L19.8 8 12 3.35 4.2 8Z"/>
    </Icon>
  );
});

IconMaterialDraftsFilled.displayName = 'AmauiIconMaterialDraftsFilled';

export default IconMaterialDraftsFilled;
