import { z } from 'zod';

export const emailValidator = z.string().email('Please enter a valid email address');

export const phoneValidator = z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number');

export const nameValidator = z.string().min(2, 'Name must be at least 2 characters');

export const messageValidator = z.string().min(10, 'Message must be at least 10 characters');
