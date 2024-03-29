import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultipleStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultipleStop'

      short_name='MultipleStop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 9q-.425 0-.712-.288Q9 8.425 9 8t.288-.713Q9.575 7 10 7t.713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9ZM6 9q-.425 0-.713-.288Q5 8.425 5 8t.287-.713Q5.575 7 6 7t.713.287Q7 7.575 7 8t-.287.712Q6.425 9 6 9Zm8 8q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15t.713.287Q15 15.575 15 16t-.287.712Q14.425 17 14 17Zm2.3-5.7q-.3-.3-.3-.713 0-.412.3-.712L17.175 9H14q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h3.175l-.9-.9Q16 5.825 16 5.412q0-.412.3-.712.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.687.275-.413 0-.713-.275Zm-10 8-2.6-2.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l2.6-2.6q.275-.275.688-.275.412 0 .712.275.3.3.3.712 0 .413-.3.713L6.825 15H10q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17H6.825l.9.9q.275.275.275.687 0 .413-.3.713-.275.275-.7.275-.425 0-.7-.275ZM18 17q-.425 0-.712-.288Q17 16.425 17 16t.288-.713Q17.575 15 18 15t.712.287Q19 15.575 19 16t-.288.712Q18.425 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialMultipleStop.displayName = 'AmauiIconMaterialMultipleStop';

export default IconMaterialMultipleStop;
