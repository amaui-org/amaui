import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabUnselectedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedW100Filled'

      short_name='TabUnselected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 18.7V18h2v.7ZM8 6v-.7h2V6Zm5.5 4q-.625 0-1.062-.438Q12 9.125 12 8.5V5.3h7.2q.65 0 1.075.425.425.425.425 1.075V10Zm5.5 8.7V18h.2q.375 0 .588-.212.212-.213.212-.588V16h.7v1.2q0 .65-.425 1.075-.425.425-1.075.425Zm-8 0V18h2v.7Zm9-4.7v-2h.7v2ZM3.3 15v-2H4v2Zm0-4V9H4v2Zm1.5 7.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V17H4v.2q0 .3.25.55.25.25.55.25H5v.7ZM3.3 7v-.2q0-.65.425-1.075Q4.15 5.3 4.8 5.3H6V6H4.8q-.375 0-.587.213Q4 6.425 4 6.8V7ZM7 18.7V18h2v.7Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedW100Filled.displayName = 'AmauiIconMaterialTabUnselectedW100Filled';

export default IconMaterialTabUnselectedW100Filled;
