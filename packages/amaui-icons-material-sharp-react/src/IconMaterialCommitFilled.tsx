import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommitFilled'

      short_name='Commit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-1.825 0-3.188-1.137Q7.45 14.725 7.1 13H2v-2h5.1q.35-1.725 1.712-2.863Q10.175 7 12 7q1.825 0 3.188 1.137Q16.55 9.275 16.9 11H22v2h-5.1q-.35 1.725-1.712 2.863Q13.825 17 12 17Zm0-2q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"/>
    </Icon>
  );
});

IconMaterialCommitFilled.displayName = 'AmauiIconMaterialCommitFilled';

export default IconMaterialCommitFilled;
