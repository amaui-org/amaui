import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCarouselFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselFilled'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17q-.425 0-.712-.288Q2 16.425 2 16V8q0-.425.288-.713Q2.575 7 3 7h2q.425 0 .713.287Q6 7.575 6 8v8q0 .425-.287.712Q5.425 17 5 17Zm5 2q-.425 0-.713-.288Q7 18.425 7 18V6q0-.425.287-.713Q7.575 5 8 5h8q.425 0 .712.287Q17 5.575 17 6v12q0 .425-.288.712Q16.425 19 16 19Zm11-2q-.425 0-.712-.288Q18 16.425 18 16V8q0-.425.288-.713Q18.575 7 19 7h2q.425 0 .712.287Q22 7.575 22 8v8q0 .425-.288.712Q21.425 17 21 17Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselFilled.displayName = 'AmauiIconMaterialViewCarouselFilled';

export default IconMaterialViewCarouselFilled;
