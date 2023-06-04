import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerificationOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationOffW100'

      short_name='DomainVerificationOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M842 978 708 844H192q-25 0-42.5-17.5T132 784V368q0-25 17.5-42.5T192 308h20v40L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5ZM192 816h488L280 416H160v368q0 14 9 23t23 9Zm631-9-23-23V416H432L324 308h444q25 0 42.5 17.5T828 368v416q0 6-1.5 12t-3.5 11ZM587 571l-20-20 31-31q4-4 9.5-4.5T618 520q5 5 5 10t-5 10l-31 31Zm-56 56-72 72q-9 9-21 9t-21-9l-75-75q-4-4-4.5-9.5T342 604q5-5 10-5t10 5l76 76 73-73 20 20Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationOffW100.displayName = 'AmauiIconMaterialDomainVerificationOffW100';

export default IconMaterialDomainVerificationOffW100;
