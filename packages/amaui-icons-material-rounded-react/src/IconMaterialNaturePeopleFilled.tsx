import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNaturePeopleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleFilled'

      short_name='NaturePeople'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 11q-.65 0-1.075-.425Q3 10.15 3 9.5q0-.65.425-1.075Q3.85 8 4.5 8q.65 0 1.075.425Q6 8.85 6 9.5q0 .65-.425 1.075Q5.15 11 4.5 11ZM4 22q-.425 0-.712-.288Q3 21.425 3 21v-4h-.5q-.2 0-.35-.15Q2 16.7 2 16.5V13q0-.425.288-.713Q2.575 12 3 12h3q.425 0 .713.287Q7 12.575 7 13v3.5q0 .2-.15.35-.15.15-.35.15H6v3h8v-5h-1.75q-1.775 0-3.012-1.238Q8 12.525 8 10.75q0-1.325.713-2.363.712-1.037 1.837-1.537.275-1.625 1.512-2.738Q13.3 3 15 3q1.7 0 2.938 1.112 1.237 1.113 1.512 2.738 1.125.5 1.838 1.537Q22 9.425 22 10.75q0 1.775-1.237 3.012Q19.525 15 17.75 15H16v5h4q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleFilled.displayName = 'AmauiIconMaterialNaturePeopleFilled';

export default IconMaterialNaturePeopleFilled;
