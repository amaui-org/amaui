import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsRoundedW100Filled'
      short_name='Drafts'

      {...props}
    >
      <path d="M4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V8.15Q3.3 7.95 3.4 7.787Q3.5 7.625 3.65 7.5L11.225 3Q11.4 2.875 11.6 2.837Q11.8 2.8 12 2.8Q12.2 2.8 12.4 2.837Q12.6 2.875 12.775 3L20.35 7.5Q20.5 7.625 20.6 7.787Q20.7 7.95 20.7 8.15V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM12 12.525Q12.1 12.525 12.188 12.5Q12.275 12.475 12.375 12.425L19.8 8L12.375 3.575Q12.275 3.525 12.188 3.5Q12.1 3.475 12 3.475Q11.9 3.475 11.812 3.5Q11.725 3.525 11.625 3.575L4.2 8L11.625 12.425Q11.725 12.475 11.812 12.5Q11.9 12.525 12 12.525Z"/>
    </Icon>
  );
});

IconMaterialDraftsRoundedW100Filled.displayName = 'AmauiIconMaterialDraftsRoundedW100Filled';

export default IconMaterialDraftsRoundedW100Filled;
