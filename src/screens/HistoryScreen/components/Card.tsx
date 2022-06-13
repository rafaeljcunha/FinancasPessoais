import React from 'react';
import {HistoryCardContent, HistoryCardTitle} from './index';
import {HistoryCardWrapper} from './styles';
import {Divider} from '../../../components';
import {TData} from '../../../types/history.types';

interface IHistoryCard extends Pick<TData, 'title' | 'icon' | 'historyData'> {
  pressedItem: boolean;
  onPressItem(): void;
}

export function HistoryCard({
  title,
  pressedItem,
  onPressItem,
  icon,
  historyData,
}: IHistoryCard) {
  return (
    <HistoryCardWrapper>
      <HistoryCardTitle
        onPressItem={onPressItem}
        pressedItem={pressedItem}
        title={title}
        icon={icon}
      />
      {pressedItem && (
        <>
          <Divider />
          <HistoryCardContent historyData={historyData} />
        </>
      )}
    </HistoryCardWrapper>
  );
}
