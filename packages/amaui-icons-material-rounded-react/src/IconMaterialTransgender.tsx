import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransgender = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transgender'

      short_name='Transgender'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.45 0 2.475-1.025Q15.5 12.95 15.5 11.5q0-1.45-1.025-2.475Q13.45 8 12 8q-1.45 0-2.475 1.025Q8.5 10.05 8.5 11.5q0 1.45 1.025 2.475Q10.55 15 12 15Zm0 8q-.425 0-.712-.288Q11 22.425 11 22v-1h-1q-.425 0-.712-.288Q9 20.425 9 20t.288-.712Q9.575 19 10 19h1v-2.1q-1.925-.35-3.212-1.863Q6.5 13.525 6.5 11.5q0-.875.25-1.663.25-.787.7-1.437l-.65-.65-.725.725Q5.8 8.75 5.4 8.75t-.7-.3q-.275-.275-.275-.688 0-.412.275-.712l.7-.725-1.9-1.9V6q0 .425-.287.713Q2.925 7 2.5 7t-.712-.287Q1.5 6.425 1.5 6V2q0-.425.288-.713Q2.075 1 2.5 1h4q.425 0 .713.287.287.288.287.713t-.287.712Q6.925 3 6.5 3H4.925l1.9 1.9.725-.725q.275-.275.688-.275.412 0 .712.3.275.275.275.687 0 .413-.275.713l-.7.725.65.65q.65-.475 1.438-.725Q11.125 6 12 6q.875 0 1.663.25.787.25 1.437.725L19.075 3H17.5q-.425 0-.712-.288Q16.5 2.425 16.5 2t.288-.713Q17.075 1 17.5 1h4q.425 0 .712.287.288.288.288.713v4q0 .425-.288.713Q21.925 7 21.5 7t-.712-.287Q20.5 6.425 20.5 6V4.425l-3.975 3.95q.475.675.725 1.462.25.788.25 1.663 0 2.025-1.288 3.537Q14.925 16.55 13 16.9V19h1q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 21 14 21h-1v1q0 .425-.287.712Q12.425 23 12 23Z"/>
    </Icon>
  );
});

IconMaterialTransgender.displayName = 'AmauiIconMaterialTransgender';

export default IconMaterialTransgender;
