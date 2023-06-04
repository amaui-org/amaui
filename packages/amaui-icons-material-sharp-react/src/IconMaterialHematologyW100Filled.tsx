import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHematologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HematologyW100Filled'

      short_name='Hematology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 964q-51 0-79.5-45.5T412 816q0-57 28.5-102.5T520 668q51 0 79.5 45.5T628 816q0 57-28.5 102.5T520 964Zm-334-8-26-9q27-91 39-184t12-187q0-94-12-187t-39-184l26-9q28 93 40.5 188T239 576q0 97-12.5 192T186 956Zm587 0q-28-93-40.5-188T720 576q0-97 12.5-192T773 196l26 9q-27 91-39 184t-12 187q0 94 12 187t39 184l-26 9Zm-273-80q4 4 9.5 3.5T520 875q12-11 18-26.5t6-32.5q0-17-6.5-32T520 757q-4-4-9-4.5t-10 3.5q-5 4-5 9.5t4 10.5q8 8 12 18.5t4 21.5q0 11-4 21.5T500 856q-5 5-5 10.5t5 9.5Zm-60-392q-51 0-79.5-45.5T332 336q0-57 28.5-102.5T440 188q51 0 79.5 45.5T548 336q0 57-28.5 102.5T440 484Zm19-88q5-4 5-9.5t-4-10.5q-8-8-12-18.5t-4-21.5q0-11 4-21.5t12-18.5q5-5 5-10t-5-10q-4-4-10-4t-10 4q-12 12-18 27.5t-6 32.5q0 17 6 32t18 27q4 4 9.5 4.5t9.5-3.5Z"/>
    </Icon>
  );
});

IconMaterialHematologyW100Filled.displayName = 'AmauiIconMaterialHematologyW100Filled';

export default IconMaterialHematologyW100Filled;
