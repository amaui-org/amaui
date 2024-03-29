import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectFilled'

      short_name='Subject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h8q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 19 13 19Zm0-8q-.425 0-.713-.288Q4 10.425 4 10t.287-.713Q4.575 9 5 9h14q.425 0 .712.287Q20 9.575 20 10t-.288.712Q19.425 11 19 11Zm0 4q-.425 0-.713-.288Q4 14.425 4 14t.287-.713Q4.575 13 5 13h14q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 15 19 15Zm0-8q-.425 0-.713-.287Q4 6.425 4 6t.287-.713Q4.575 5 5 5h14q.425 0 .712.287Q20 5.575 20 6t-.288.713Q19.425 7 19 7Z"/>
    </Icon>
  );
});

IconMaterialSubjectFilled.displayName = 'AmauiIconMaterialSubjectFilled';

export default IconMaterialSubjectFilled;
