import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppRegistrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppRegistrationW100Filled'

      short_name='AppRegistration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.712Q5.6 17 6 17q.425 0 .713.288Q7 17.575 7 18q0 .4-.287.7-.288.3-.713.3Zm0-6q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q5.6 11 6 11q.425 0 .713.287Q7 11.575 7 12q0 .4-.287.7-.288.3-.713.3Zm0-6q-.4 0-.7-.3Q5 6.4 5 6q0-.425.3-.713Q5.6 5 6 5q.425 0 .713.287Q7 5.575 7 6q0 .4-.287.7Q6.425 7 6 7Zm6 6q-.425 0-.712-.3Q11 12.4 11 12q0-.425.3-.713.3-.287.7-.287.425 0 .713.287.287.288.287.713Zm0-6q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q11.6 5 12 5q.425 0 .713.287Q13 5.575 13 6q0 .4-.287.7-.288.3-.713.3Zm-.6 12.3q-.175 0-.287-.112Q11 19.075 11 18.9v-.175q0-.025.125-.3L17.05 12.5l.75.75-5.925 5.925q-.025.025-.3.125ZM18 7q-.4 0-.7-.3-.3-.3-.3-.7 0-.425.3-.713Q17.6 5 18 5q.425 0 .712.287Q19 5.575 19 6q0 .4-.288.7-.287.3-.712.3Zm.275 5.8-.775-.775.425-.4q.1-.1.213-.1.112 0 .187.1l.35.35q.1.075.088.187-.013.113-.088.213Z"/>
    </Icon>
  );
});

IconMaterialAppRegistrationW100Filled.displayName = 'AmauiIconMaterialAppRegistrationW100Filled';

export default IconMaterialAppRegistrationW100Filled;
