import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCarouselW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselW100'

      short_name='ViewCarousel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 15.7q-.325 0-.537-.212-.213-.213-.213-.538v-5.9q0-.325.213-.538.212-.212.537-.212h.8q.325 0 .537.212Q6 8.725 6 9.05v5.9q0 .325-.213.538-.212.212-.537.212Zm4.6 2q-.325 0-.538-.213-.212-.212-.212-.537v-9.9q0-.325.212-.538.213-.212.538-.212h5.9q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213ZM9 7v10Zm9.75 8.7q-.325 0-.538-.212Q18 15.275 18 14.95v-5.9q0-.325.212-.538.213-.212.538-.212h.8q.325 0 .537.212.213.213.213.538v5.9q0 .325-.213.538-.212.212-.537.212ZM9 7v10h6V7Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselW100.displayName = 'AmauiIconMaterialViewCarouselW100';

export default IconMaterialViewCarouselW100;
