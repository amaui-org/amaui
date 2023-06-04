import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrading = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grading'

      short_name='Grading'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h16q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Zm0 4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0 4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h7q.425 0 .713.287.287.288.287.713t-.287.712Q11.425 17 11 17Zm0 4q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h7q.425 0 .713.288.287.287.287.712t-.287.712Q11.425 21 11 21Zm11.725-.725L14.3 18.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l.725.725L18.9 15.7q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-3.175 3.175q-.3.3-.7.3-.4 0-.7-.3ZM4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialGrading.displayName = 'AmauiIconMaterialGrading';

export default IconMaterialGrading;
