import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPoliceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceFilled'

      short_name='LocalPolice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.4 14.7 1.6-1.2 1.55 1.2q.275.2.575.013.3-.188.175-.538l-.6-1.975 1.625-1.275q.275-.225.163-.575Q15.375 10 15 10h-1.9l-.65-1.975q-.125-.35-.45-.35t-.45.35L10.9 10H9q-.375 0-.5.35t.175.575L10.25 12.2l-.6 1.975q-.125.35.175.538.3.187.575-.013Zm1.6 7.225h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceFilled.displayName = 'AmauiIconMaterialLocalPoliceFilled';

export default IconMaterialLocalPoliceFilled;
