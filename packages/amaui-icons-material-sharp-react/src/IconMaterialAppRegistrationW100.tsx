import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppRegistrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppRegistrationW100'

      short_name='AppRegistration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.3v-.75l6.05-6.05.75.75-6.05 6.05Zm7.275-6.5-.775-.775.625-.6.75.75ZM6 7q-.4 0-.7-.3Q5 6.4 5 6q0-.425.3-.713Q5.6 5 6 5q.425 0 .713.287Q7 5.575 7 6q0 .4-.287.7Q6.425 7 6 7Zm0 12q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.712Q5.6 17 6 17q.425 0 .713.288Q7 17.575 7 18q0 .4-.287.7-.288.3-.713.3Zm0-6q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q5.6 11 6 11q.425 0 .713.287Q7 11.575 7 12q0 .4-.287.7-.288.3-.713.3Zm6 0q-.425 0-.712-.3Q11 12.4 11 12q0-.425.3-.713.3-.287.7-.287.425 0 .713.287.287.288.287.713Zm6-6q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q17.6 5 18 5q.425 0 .712.287Q19 5.575 19 6q0 .4-.288.7-.287.3-.712.3Zm-6 0q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q11.6 5 12 5q.425 0 .713.287Q13 5.575 13 6q0 .4-.287.7-.288.3-.713.3Z"/>
    </Icon>
  );
});

IconMaterialAppRegistrationW100.displayName = 'AmauiIconMaterialAppRegistrationW100';

export default IconMaterialAppRegistrationW100;
