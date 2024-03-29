import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTune = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tune'

      short_name='Tune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h4q.425 0 .713.288Q9 17.575 9 18t-.287.712Q8.425 19 8 19ZM4 7q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h8q.425 0 .713.287Q13 5.575 13 6t-.287.713Q12.425 7 12 7Zm8 14q-.425 0-.712-.288Q11 20.425 11 20v-4q0-.425.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16v1h7q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19h-7v1q0 .425-.287.712Q12.425 21 12 21Zm-4-6q-.425 0-.713-.288Q7 14.425 7 14v-1H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h3v-1q0-.425.287-.713Q7.575 9 8 9t.713.287Q9 9.575 9 10v4q0 .425-.287.712Q8.425 15 8 15Zm4-2q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm4-4q-.425 0-.712-.288Q15 8.425 15 8V4q0-.425.288-.713Q15.575 3 16 3t.712.287Q17 3.575 17 4v1h3q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-3v1q0 .425-.288.712Q16.425 9 16 9Z"/>
    </Icon>
  );
});

IconMaterialTune.displayName = 'AmauiIconMaterialTune';

export default IconMaterialTune;
